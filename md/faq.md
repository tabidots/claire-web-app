# Common questions

## Claire didn’t correct X mistake.
The possible types of mistakes that a language learner can make are as infinite as the possibilities of language itself. As far as Claire is concerned, there are three types of mistakes:

### One-off mistakes
Claire identifies mistakes that follow certain patterns. However, many mistakes do not belong to a category of common mistakes. They might even be limited to just one or two people. They might even be accidental, and the same person might not make that mistake again. As a result, these mistakes cannot be generalized in a way that would allow Claire to correct them.

### Semantic (meaning) mistakes
As mentioned above, Claire is not a mind-reader. `I am in the hospital` and `I am at the hospital` are both grammatically correct, even though they mean two very different things. Unfortunately, Claire cannot magically jump out of the app and find you in real life to determine whether you are a patient or a visitor.

### Grammatical mistakes
These are the mistakes that Claire is trained to detect. They include things like: wrong verb forms, wrong plurals, lack of agreement between two things that should agree, missing words, and wrong word order.

Also, please keep in mind that Claire was developed based on real sentences that were written by real people. Often, real mistakes reflect a logic that comes from the person’s first language. Made-up errors will probably not produce good results.

## It says “You found a bug.”
Your text led the program down a path where it encountered a mistake in its code. This does *not* necessarily mean that your sentence was grammatically incorrect.

## What are “Revision 1” and “Revision 2”?
Claire uses NLP (natural language processing) tools to help understand the role of each word in a sentence. However, if the text does not look like a newspaper article, the accuracy of these tools decreases significantly. So, Claire’s process involves multiple layers of analysis and corrections that start simple and become more complex.

Corrections that only require simple analysis, such as most spelling mistakes and many fixed expressions, are made before the sentence is split into different parts. This enables more sophisticated text manipulation later on. However, it also means that it is not easy to determine where “early” corrections came from. In addition, if a sentence contains many spelling mistakes, it is too cumbersome to show each one separately.

So, **Revision 1** shows all of the simple edits at a glance. **Revision 2** shows the difference between the original input and the final output.

## Claire messed up my sentence.
The algorithms behind Claire’s sentence analysis need to accommodate a vast range of correct *and* incorrect sentence patterns. However, since parts of complex correct sentences often look like incorrect sentences, this is trickier than it might seem. To give a simple example, `He talking about climate change` is wrong, but `I read an article talking about climate change` is fine.

The sentence analyzer logic has been painstakingly refined over many iterations, and it produces correct results on almost all of the 32,000 sentences that were used as test data. A 95% accuracy rate on new data was observed during development, although the actual accuracy can vary, depending on the level of the text and the amount of ambiguity it contains.

## Why isn’t Claire faster?
First, the application itself requires 2 servers: one for the Claire engine (which processes the text you type) and one for [Stanford CoreNLP](http://nlp.stanford.edu/software/corenlp.shtml) (which does the initial grammatical parsing).

In addition, CoreNLP and similar natural language processing tools draw on an enormous bank of data in order to process sentences, regardless of their length or complexity. That means that seemingly short and simple sentences might require the same amount of time as long, complex sentences.

## Why are the labels so complicated?
The grammar checking program needs very specific labels to do its job properly. For example, the word `that` alone has six different grammatical fuctions. See the **Terminology** section for more information.
