{frontmatter}

## Acknowledgments

To my wife Lili, the best wife in the world!

To Mozilla for always believing in us, for keeping the web open and free and for always placing the user first!

To the Brazilian Mozilla Community for receiving me so well and being just awesome!

To my GSoC mentor Marcos Caceres, the Mozilla WebAPI Team, the Mozilla Tech Evangelists and Dev Engagement teams for being more than awesome!

To Google for the Google Summer of Code 2013! This program is wonderful.

I also say thank you from the bottom of my heart to all people who invested their time and effort in sending me pull requests to make this book better: Ryuno-Ki, chisophugis, ghost, dholbert, marcoscaceres.

## This book is in perpetual beta

My plan is to update this book often, expanding its contents and revising the text as issues are found by readers. Since some APIs are still being implemented by Firefox OS, you will want to make sure you're reading an up-to-date version of this book.

## Me, myself, and I

In this book you will find many parts where I express my personal opinion and make decisions that may be different from what other programmers would do - particularly if it helps explain an idea more easily. I will always try to make it clear and explain my reasoning when I am giving my opinion. Anyway, if there is an error in what I am saying, I will revise the text and update the book. See the Feedback & Pull Requests section for more information.

## How this book came to be

Originally, I'd been writing this book in my spare time - but thanks to the good help of my Google Summer of Code (GSoC) mentor, Marcos Caceres, this book became part of my GSoC project - which aimed to create useful developer resources for Firefox OS. So, huge thanks to Google for funding this work and to Mozilla's Web API team for letting me join them over the summer.

## Staying up to date

This book is distributed for **free** using [Leanpub](http://leanpub.com).

You can register your email to receive automatic updates when you download this book from its [book page at Leanpub](http://leanpub.com/quickguidefirefoxosdevelopment). The plan is to update this book many times per month. If you got this book from a friend or from some other site, you should consider going to the page above to download and register there thus making sure you will receive the update notices.

## Donations

Writing a book requires a lot of work and I would like to dedicate more time in my life for this type of activity after the 2013 Google Summer of Code is done. Those that think that this book is useful (or cool) may move the price slider on Leanpub download page from zero to any desired amount and give me some bucks. Those that would rather donate using PayPal, I can receive donations under the *agarzia@mac.com* account.

Regardless of donations, you should fill your email on the download form to make sure that once the book is updated you will receive a notice!

## How to contact the author

To send comments and feedback please send an email to [fxosquickguide@andregarzia.com](mailto:fxosquickguide@andregarzia.com). My website is [http://andregarzia.com](http://andregarzia.com). My Twitter account is [@soapdog](http://twitter.com/soapdog).

If you want to help improve the content of this book, please see the Feedback & Pull Requests section.

## Cover Illustration

The cover page was created by Raphael Eckhardt, a designer and illustrator from Brazil. You can check out his work and contact him (he is a freelancer) at [http://raphaeleckhardt.com/](http://raphaeleckhardt.com/).

## Who should read this book

This book is written for readers with an intermediate knowledge of HTML, CSS and JavaScript who wants to build mobile applications for Firefox OS. Teaching HTML, CSS and JavaScript is beyond the scope of this book. I will give you links for good reference books though.

## Best Practices vs Beginner Friendliness

Experienced developers will notice that sometimes I don't follow all the good practices in the source code of the examples of this book. Even though I am avoiding anti-patterns in here, I am trying to keep the use of immediate functions and other similar practices to a minimum. The main reason for that is to make the source code beginner friendly as this is an introductory book. Seasoned programmers will know when and how to change things while beginner coders will still be able to understand what is going on. All code here works and as I update this book I may revisit the code and use more and more best practices depending on the readers feedback.

If you want to dive deeper in the world of high quality JavaScript coding here are some good books:

* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do): The JavaScript Book.
* [JavaScript Patterns](http://shop.oreilly.com/product/9780596806767.do): Patterns and best practices.
* [JavaScript Enlightenment](http://shop.oreilly.com/product/0636920027713.do): Advanced JavaScript techniques.
* [Maintainable JavaScript](http://shop.oreilly.com/product/0636920027713.do): Writing code that is easy to maintain and work with.

## Feedback & Pull Requests

This is a Free and Open book and I am excited to receive all feedback that you people can give me. All the content of the book is at a [GitHub repository](https://github.com/soapdog/firefoxos-quick-guide) and is built using Markdown (with some extensions by Leanpub). To give me feedback, bug fixes and improvements just send me a pull request. Thanks in advance for all contributions.

The Git repository for this book is at [https://github.com/soapdog/firefoxos-quick-guide](https://github.com/soapdog/firefoxos-quick-guide).

## Translations

This book was originally written in Portuguese and translated into English by me. Both versions are available for free on the net at:

* [Portuguese Version](http://leanpub.com/guiarapidofirefoxos): Guia Rapido para Desenvolvimendo para Firefox OS.
* [English Version](http://leanpub.com/quickguidefirefoxosdevelopment): Quick Guide for Firefox OS App Development.

I welcome all help to translate this book to even more languages (and to fix my broken English).

## Version history

### Version 0.3
Added new content for **App Manager**. Since most of the current devices still running **Firefox OS 1.1** we're keeping the old simulator stuff.

This version was done as a quick update to include the App Manager section. This section will be improved in the next releases. If you find anything wrong with this new section (or any section) then please report the issues at [issue tracker on GitHub](https://github.com/soapdog/firefoxos-quick-guide/issues).

### Version 0.2
Book was revised by Marcos Caceres of Mozilla's WebAPI team. The content of each chapter was checked for technical correctness, and many grammatical mistakes and typos were fixed throughout.

### Version 0.1

This is the first version of this book. I am yet to run this through an editor and it was not revised for typos, grammar mistakes and general bad things. English is not my first language so please correct me when I am wrong. What you're reading here begun on the 20th of August of 2013 as a quick guide to be distributed at [BrazilJS Conference](http://braziljs.com.br/) that happened on the 22nd and 23rd. So you're basically reading a quick draft written in two days.

I am using the [Leanpub](http://leanpub.com) system to write this book. This system allows me to iterate quickly and manage this project while keeping me sane. This version is a quasi-literal translation from the original in Portuguese.

{mainmatter}
