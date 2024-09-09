---
layout: page
title: BibFetcher
description: Fetching BibTex from dblp with Title/Author Information Automatically.
img: /assets/img/project/4/preview.png
importance: 4
category: tool
---

### Why?

Most researchers find it tedious to manually maintain a bibliography file when writing academic papers (at least my colleagues and I do). In particular, it requires frequent switching between the text editor, e.g., [Overleaf](https://www.overleaf.com/), and the online database, e.g., [DBLP](https://dblp.org/), to search for bibliography, with lots of clicking, copying and pasting. These repetitive operations are really time-consuming and unbearable. So why don't we automate this process? Just hand it over to the computer, and then we can focus on writing or even enjoy a coffee break! This is exactly what _BibFetcher_ does.

### What?

So, what specifically do we want _BibFetcher_ to do? A coarse feature list is as follows:

1. <b>Automated Bibliography Retrieval</b>: Automatically fetch entries from online databases such as DBLP.
2. <b>Customized Import</b>: Allow users to import their bibliography in editors with specified citation keys.
3. <b>Export Options</b>: Provide options to export the bibliography in various formats for different document types.
4. <b>Error Handling</b>: Handle errors when a paper cannot be found or when there are missing fields.
5. <b>Integration with Editors</b>: Integrate with editors to insert bibliography directly into the document.
6. <b>User Interface</b>: Offer a user-friendly interface that is intuitive to use and navigate.

This project focuses on the core features (1~4) and leaves the additional ones (5 and 6) for future work.

### How?

Now, the question arises: how do we implement these features? Let's regard this as a function: $$f(x) \rightarrow y$$, then deal with it step by step:

##### Step 1. Define the input $$x$$

Specifically, we define the input as a json dict:

{% raw %}

```json
{
  "citationkey": "title [author]"
}
```

{% endraw %}

The `citationkey` is used to specify index of references, enabling quick autocompletion in editors to browse references. The `title` is necessary for searching for the desired paper, while the `author` is optional and works only when addressing papers with highly similar titles.

##### Step 2. Define the output $$y$$

DBLP stores several different types of publications:

{% include figure.liquid path="assets/img/project/4/dblp_type.png" width="50%" %}

Here we are mainly interested in the following three types:

```python
class PubType(Enum):
    PROCEEDING = 'Conference and Workshop Papers'
    JOURNAL = 'Journal Articles'
    ARXIV = 'Informal and Other Publications'
```

We define the output as a `BibEntry` object with the necessary bibliography fields for each type of publications as follows:

```python
bib_item_dict = {
    PubType.PROCEEDING: ['author', 'title', 'booktitle', 'pages', 'address', 'year'],
    PubType.JOURNAL: ['author', 'title', 'journal', 'volume', 'number', 'pages', 'year'],
    PubType.ARXIV: ['author', 'title', 'journal', 'volume', 'year']
}
```

##### Step 3. Implement the funtion $$f(\cdot)$$

To implement $$f(\cdot)$$, we investigate the [query API](https://dblp.org/faq/13501473.html) of DBLP. There are three major search services provided by dblp:

- [https://dblp.org/search/publ/api](https://dblp.org/search/publ/api) for publication queries
- [https://dblp.org/search/author/api](https://dblp.org/search/author/api) for author queries
- [https://dblp.org/search/venue/api](https://dblp.org/search/venue/api) for venue queries

We query the first API with the title and author information as query string through [HTTP requests](https://requests.readthedocs.io/en/latest/), and then parse the general bibliography fields from the response. Particularly, there are several trouble-making fields here:

- `author`: the author names are sometimes followed by a four-digit ID
- `title`: the [title casing conventions](https://en.wikipedia.org/wiki/Title_case) are hard to code and there are many edge cases
- `booktitle`: the booktitle does not conform to the uniform format that we prefer
- `address`: the address may be missing

We carefully address these issues through regular expressions, booktitle mapping, HTML parsing and CSS selection on the venue page, respectively. In addition, sometimes multiple bib entries are matched with one query. To ensure the correct bib is fetched, we allow users to manually select one of them by navigating the candidates or just keep it empty if none of them is desired.

##### Step 4. Handle the exception $$e$$

We provide clear exception messages for not-found entries and check for missing fields in retrieved entries, all of which are recorded in a log file for post-processing.

> To test _BibFetcher_ and dicover potential failure cases, we search DBLP to construct a json file as test example, which includes publications of all the venues in the venue dict from 2020 to 2023, three entries per year.
> {: .block-warning }

### Who?

With the well-implemented function $$f(x) \rightarrow y$$, any $$\LaTeX$$ and Microsoft Word user can employ _BibFetcher_ to generate bibliography, e.g., given the citation key and query information:

```json
{
  "resnet": "Deep Residual Learning for Image Recognition, Kaiming He"
}
```

export bibtex for $$\LaTeX$$ users:

{% raw %}

```bibtex
@inproceedings{resnet,
	author= {Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun},
	title= {{Deep Residual Learning for Image Recognition}},
	booktitle= {Proceedings of {IEEE} {CVPR}},
	pages= {770-778},
	address= {Las Vegas, NV, USA},
	year= {2016},
}
```

{% endraw %}

or text for Mircosoft Word users:

> Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun, "Deep Residual Learning for Image Recognition", in _Proceedings of IEEE CVPR_, pp.770-778, Las Vegas, NV, USA, 2016.

### Code

We release _BibFecther_ on [this GitHub repo](https://github.com/mangophant/BibFetcher). Please take a look and feel free to customize it!

**Contributors**: [Meng Chen]({{ site.url }}) and [Kun Wang](https://github.com/kuang22)
