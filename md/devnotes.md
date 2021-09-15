# Developer’s notes

The development of Claire represents an attempt to “teach” language to a computer in order to teach language to humans. While these two ways of teaching are obviously very different, the journey has yielded a few significant insights about English and language technology.

## Why doesn’t Google Translate work?
Despite the apparent magic of tools like Apple’s **Siri** and IBM’s **Watson**, natural language technology is still, even in 2016, chiefly employed in mechanical tasks that do not require deep understanding: fetching data; providing more relevant search results; identifying named entities; recommending restaurants; captioning images; summarizing press releases, medical reports, and academic papers; identifying trends in word usage among various demographic groups for marketing purposes and academic research.

So, while there is software that can “read” a document and tell you that *X company* is launching *Y product* on *Z date*, or that *F protein* binds to *G molecule* during *H process*, that doesn’t mean the software actually understands the process of launching or binding. What you are seeing is the algorithmic dance of word statistics and knowledge databases.

But words and sentences do not materialize from the collision of numbers inside our brains; they emerge out of communicative intent and are governed and transformed by a battery of rules that we are not even conscious of.

Statistical language models correspond to natural language as faithfully as economic models correspond to actual human behavior. Some economists have recognized this and joined forces with neuroscientists and psychologists to create the interdisciplinary field of “behavioral economics”, which seeks to give us a more comprehensive view of how people make decisions. Yet linguists have been more or less banished from the field of natural language technology over the last couple of decades, forced to cede their territory to computer scientists.

*“Every time I fire a linguist, the performance [of our speech recognition software] goes up”* —Fred Jelinek

Whether the use cases have driven the approach or vice-versa, this is not surprising: statistical methods and models are scalable; linguistic expertise is not. Engineers can achieve a surprising amount of translation coverage in a new language without even knowing the first thing about it. But the problem is that if *they* don’t know anything about the language, does the computer actually end up learning anything about that language? And how accurate can the results actually be?

This is the main reason why, even after the terabytes of data that it has processed, Google Translate remains so (amusingly) disappointing, only able to talk like *Homo Linguisticus*, not like an actual human. And while Claire does not claim to (or need to) incorporate “semantics” to a significant extent, the accuracy of Claire’s sentence analyzer is a testament to the merits of merging the breadth of statistical parsing with the precision of a rule-based approach, informed by old-fashioned linguistic expertise.

## Every word counts
Many apps, natural language engines, and English learners focus almost exclusively on **content words**. These are the “heavy hitters” that could almost comprise a news article on their own, in a “Me Tarzan, you Jane” kind of way: *senator, schedule, meeting, demand, historical significance, momentum, announce, campaign, victory*. They demand the spotlight — and language learners, language teachers, and software developers eagerly give it to them. When people think of enriching their vocabulary, they usually think of adding content words to their mental storehouse of words.

**Function words**, on the other hand, are unassuming words like *what*, *of*, *so*, *that*, and arguably *be* and its inflections. Software generally ignores them because they are too common and mundane to provide higher-level information like the overall gist, tone, or perspective of an article. Learners often ignore them because their first language marks the content-and-function relationship differently or because the peculiar stress pattern of spoken English makes them *sound* insignificant.

However, function words have an outsize impact on the meaning and grammaticality of a sentence. To understand the weight of function words, you only need to consider the question *“What do you do?”*, which does not contain a single content word yet possesses a real-world significance that could hardly be overstated. Or consider the dramatic and non-intuitive difference between sets of phrasal verbs like “take in/out/up/down/on/off/over/away/back”.

So, *__every word__ in an English sentence is important, including the “small” ones.* Perhaps *especially* the small ones.

In spite of this linguistic truth, the NLP community is doubling down on content words, as the multiplication of [word vectors](http://multithreaded.stitchfix.com/blog/2015/03/11/word-is-worth-a-thousand-vectors/) is poised to become the [“next big thing”](https://www.theguardian.com/science/2015/may/21/google-a-step-closer-to-developing-machines-with-human-like-intelligence) in the quest to reach a more fine-grained level of comprehension.

This is a very technically dazzling solution to *one* problem – word sense ambiguity – that is most immediately applicable to two specific use cases: data retrieval and machine translation. In other words, it is the work of engineers, not linguists.

However, outside of machine translation, the distinction between the different senses of polysemous words like “law” or “record” is quite small compared to, say, making an entire statement hypothetical by changing “can” to “could”. And just because people don’t search or shop for thoughts, that doesn’t diminish the difference between “over-thinking” something and “thinking it over”.

## Functional, formulaic, fluent
The data that was used in developing Claire makes another point clear: *Not only are function words as important as content words for general understanding, the majority of the obstacles to English **fluency and mastery** lie in the function words.* When native speakers perceive someone’s English to be “broken”, they are usually referring to the misuse or absence of function words.

For example, *eat* is a content word, and in many Asian languages, *“Ate”* can be a complete sentence, whose meaning might be *“Yes, I have eaten”* or *“Have you eaten?”*, depending on the situation. The onus of comprehension is on the listener.

English, on the other hand, is known as a **“low-context language”**, where the speaker must make sure that no blanks are left unfilled: *Who* ate? *When* did they eat? In fact, English is stricter than any other language in the world in terms of sentence completeness and word order. This is a unique characteristic of the language that is very helpful for general computational comprehension, because function words are not only semantically important, they are also mandatory in English.

And, for Claire in particular, it is a win-win situation, because the grammaticality of almost every aspect of an English sentence can be assessed *before you even need to consider its real-world meaning*. The software does not have to concern itself with the meaning of the verb, whether it is “eat” or “prognosticate”, but it is still able to communicate to the learner that their sentence was incomplete and to teach them how to generate the correct form of past-tense sentences and questions with any verb.

This idea works for more than just individual words. In fact, entire sentences can be reduced to sequences of grammatical roles. For example, the subject of an English statement must precede its verb and it must agree with that verb in number, whether it is 2 or 20 words long. Consider the following sentence:

>> I think that *a lot of the world **music** that we hear right now in America or in the West* **is** not really representative of what people are listening to in West Africa.

In terms of grammar checking, the relationship between “music” and “is” would elude most NLP applications, due to the distance between the words. But the most significant insight, for engineers and English learners alike, is that this sentence is nothing more than a sophisticated version of the pattern *I think (that) **THING** is **DESCRIPTION***.

Again, this is a win-win situation. By reducing sentences to grammatical formulas like *subject-verb-object*, it becomes at least somewhat possible to normalize the basically infinite range of possible input. Distance between words is no longer a barrier to constructing patterns and detecting deviations from those patterns. And highlighting the phrases that constitute these sequences gives learners more insight about English sentence construction.

## Toward “natural” language processing
Claire’s requirements necessitated some compromises to accommodate a wide variety of native and non-native English, but the developers of the next wave of NLP software, and grammatical parsers in particular, would do well to invite linguists back into the fold. Together, they will be better able to tame the Wild West of conversational language and all the linguistic phenomena that separate real English from *See Spot run* (or *This is a pen*, if you prefer).

Until then, voice and chat interfaces will be no more than lipstick on the pig of those clunky touch-tone menus from the 90s (“Press 2 for Spanish”) and translation software output will remain only marginally better than an [@ElBloombito tweet](https://twitter.com/elbloombito).
