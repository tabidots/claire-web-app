# Limitations
Claire has been tested on a bank of over 32,000 text fragments. These fragments range from three words to three paragraphs, and from nearly incomprehensible to newspaper-level sentences. Claire achieves over 99% accuracy in analyzing and correcting the 32,000 fragments of test data, and roughly 94% on untested data. However, this percentage will vary depending on how closely the input conforms to the kind of data that was used in developing the engine, and the presence of specific linguistic phenomena may also influence Claire’s ability to interpret the text correctly.

## Not a mind-reader

Studies have shown that words carry less than 10% of a message. The rest is conveyed through body language, facial expressions, and the “music of speech” — that is, the rhythm and intonation of your voice.

When you type a sentence, you might hear a voice in your head reading those words with the same melody and rhythm you use when speaking out loud. However, Claire can’t hear that. She can only hear the words in a machine voice, with a flat tone and an even rhythm, which is very different from how people actually talk.

Human languages – especially English – have many ambiguities that cannot be resolved through words alone. Because of this, Claire may not be able to analyze every sentence the way you intended it. Please keep that in mind as you interact with Claire.

## General ambiguities
Ambiguity is inherent in all aspects of language, from spelling (is “read” past or present tense?) to sound (“a new display” vs. “a nudist play”). Humans can use common sense to resolve ambiguity, but computers can’t. And in some cases, humans can’t either, which is what makes jokes and puns possible.

### Commands
Informal commands in English consist of the plain form of the verb with no subject: *“if you meet this guy don’t forget to punch him.”* Unfortunately, missing subjects are a common feature of learner English, and correct sentences can also contain ambiguities if they lack proper punctuation. So, while a significant amount of work has gone into trying to determine whether a verb is a command or lacking a subject, Claire will give better results when commands are clearly distinguished by the word “please”.

### Conjunctions
Because words like “and” can connect a great variety of items, from single words up to complete sentences, it’s not always clear which two things are connected by conjunctions. Some learners make mistakes like *“I went and take that”*, which creates complications when approaching sentences like *“Please read through the corrections I’ve made and practice them when you have the time.”* Commas are often optional in such cases, but using them can make parsing easier.

### Unhyphenated compound adjectives
Some common cases have been accounted for, like *I am a fun loving person*. While this would be a trivial problem if all the input could be assumed to be grammatically correct, that is not the case. Claire can correct phrases with numbers, such as *This is a 15 minutes documentary*, but other types of unhyphenated compound adjectives will create problems: *There is a man eating alligator*. The absence of an article before *alligator* would resolve the ambiguity if the sentence was written by a native speaker, but because non-native speakers typically omit articles, the non-hyphenated interpretation is equally or more likely: *There is a man eating an alligator*.

### Direct address
Using people’s names at the beginning or end of a sentence can produce ambiguity when the name not set off by a comma. In most cases, Claire can add a comma in the correct place if it is missing, but sometimes it may interpret the name as an element of the sentence.

### Fixed expressions
that do not conform strictly to normal grammar: Some common interjections, like *All the best*, have been explicitly programmed into the sentence analyzer. However, other set phrases that contain verbs, such as *dream come true, easier said than done, long time no see* were not considered, as they do not occur frequently in learner English.

## Word class ambiguity
The most difficult ambiguity to deal with when processing English text in particular is **word class ambiguity**. English words can represent different parts of speech without changing their spelling, and their inflected forms can also belong to more than one word class. For example, take the word “mean” and its four forms:

Form | Possibility 1 | Possibility 2 | Possibility 3 |
-- | -- | -- | --
`mean` | adjective | plain/plural verb | singular noun
`means` | singular verb | plural noun | interjection (in Indian English)
`meaning` | noun | -ing form verb | interjection (in native English)
`meant` | simple past | past participle |

Proper usage of function words like articles and auxiliary verbs can help to mitigate this ambiguity. However, their absence or incorrect usage presents major problems for syntactic parsing.

Sentence | Looks like | Actual function | Intended form
-- | -- | -- | --
`My chat showing pink colour what is meaning` | present continuous verb | noun | “the meaning”
`What is mean by good enough?` | adjective | verb | “is meant”
`is dat means dey have sent the DVD?` | plural noun | verb | “does that mean”
`I am economically independent , but not all the ways. Means I cant wake up without my mother shout` | plural noun | interjection | “meaning”

Because grammar checking relies so heavily on an accurate analysis of the nouns and verbs in a sentence, this is by far the most significant obstacle to perfect performance. Claire has been tested on over 32,000 text fragments, so many of the common cases have been accounted for, but it is only possible to discover these ambiguities by chance. During the development process, roughly 2.5% of new sentences (25 in 1000) contained unaccounted-for word class ambiguities, which accounted for approximately 10% of bad output from Claire.

## Not a chatbot
Many new and upcoming AI applications are based on a “personal assistant” model that responds to the user’s typed or spoken questions and commands. However, even though Claire is an automated tutor in some respects, it is designed to **evaluate sentences**, not to respond to questions or commands *about* English.

So rather than asking *“What is the difference between because and because of?”*, try writing your own sentence to see which one works and which one doesn’t.

There is a very important reason for this: As demonstrated above, it is difficult enough for computers to understand normal, real-life language and to accommodate non-standard usages of words. When words are “mentioned” rather than used, the ambiguity and complexity increase to a level that is far beyond the capabilities of a machine. It is a bit like **asking a calculator how to do addition**. While natural language works well as a user-friendly interface for apps like search or banking, it cannot work if language is precisely the problem that brings the user to the app.

## Semantic errors
Claire uses certain characteristics of words as heuristics to approximate real-world understanding, which is how it is able to distinguish *“The man has eaten”* from *“This food has eaten”*. However, it does not perform semantic analysis or inference. So, Claire will ignore things that are not strictly grammatical mistakes. For example, *“He's at/in the hospital”*; *“That's why I didn't come / haven’t been coming to class”*; *“She went to his father’s house”*.

For a similar reason, Claire is designed to handle only a specific subset of preposition and collocation errors. For example, adjective-noun collocations (“heavy rain” but “strong wind”) were not considered. In these cases, the possibilities are too numerous for a rule-based approach, and it is often too difficult to judge something as completely incorrect or completely correct. Machine learning may be useful in this area, but without the ability to suggest a result with 100% confidence, the learner would be required to judge the appropriateness of multiple — and possibly unfamiliar — choices.

## Incoherent input
Claire works best when the user marks the boundaries of their sentences properly. Run-on sentences have been accounted for to a limited extent, but, in general, missing punctuation results in ambiguities that can degrade performance.

Also, while Claire may be able to grasp the grammatical structure of sentences much faster than a human, its ability to comprehend text does not surpass that of a human. A baseline level of resemblance to standard English is necessary for optimal performance.

So, it is not reasonable to expect Claire to deliver perfect results on semantically opaque or overall incoherent input, such as:

* Who wanna weight gain…. Majority cums in loosing one ……
* Maam now complete message read ok  
* hungry is very less,stomach is sensation of full,  
* If I want to inquary about any seek personal ?  
* when you are angry you have to pray to god and don’t be angry do good thing like stady good books. or hier a good songs or do arty also
* Whole movie was based funny movie and   to indicate message for every person If do any work so take patient and concentrate.  
* He not listen to my mother not going school only bunking all time....what to tell this boy ?  
* indiantimes u too belong to india what u do to india.blaming ur country is easy try to show ahat u can do to our country.important thing is usa population is very less compare to india.  
* Yes my frofessional  diploma I hope to solving and antihcal communication skills and I hard working efficiently for the growth of this company I goals my company is join the new enwariment and friendly face to face communication and conversarion whatever
* This mean how much rich person respect a poor and these ladies want say this person have nothing that is own ladies wht why rich person not uderstand a poor person .they not now his background according to own background .pls respect poor
* I AM M.SAI KIRAN IHAVE BOOKED ONIDA G721 3g order ID 9152732346 mobile on the time of deliver the screen was brocken i kept replacement on the day i have recevied mobile after 2 dayes the compiney members call to me the said we will provied 300/-rupees to my account but till now they didn't deposit money to my account (ticket id :10041385) and also my mobile was not working i showed so many places but they cannot repaired it i am feeling sad from that day on wards so please give that 300/-rupees

## Advanced structures
Many learners struggle with comma usage and forming complete clauses:

* They thought Rohil also doing the same  
* Being a girl, gave the benefit of doubt to to Jasleen, like many others! And like many others am embarrassed n let down! Apologies to the guy

Formal writing styles, like essays and books, often contain complex sentences that may be, for example, interrupted – many times, even – by commas and dashes and little asides. Advanced writers, wishing to appear sophisticated, also use participial phrases and clauses frequently. However, Claire was not designed for this level of language and may erroneously edit complex, but correct, sentences.

In addition, there are certain sentence structures that were not considered in developing the sentence analyzer, because they are not a feature of lower- and intermediate-level learner language. These include, among others, such structures as:

#### Negative inversion

* Not only did he...
* Never again will I...

#### Conditional inversion

* Had it been better, I might have...
