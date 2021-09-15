# Terminology

The sentence analyzer uses terminology that may seem quite technical and obscure. While the familiar parts of speech — *noun, verb, and adjective* – suffice for many conventional teaching scenarios, analyzing a sentence often requires very fine-grained distinctions. This is especially true in English, since many words can belong to different word classes depending on the context.

*Like* and *that* are two excellent examples of this, and putting them together further compounds the complexity:

sentence | function of "like" | function of "that" | meaning
-- | -- | -- | --
`Many people [like that].` | verb | object of verb | Many people *enjoy that thing*
`Many people like that [like that].` | adverb of manner | referent of manner | Many people enjoy that thing *in that way*
`Products [like that] doesn’t need any marketing.` | similarity | object of comparison | Products *that are similar to that thing*…
`I want one [like that].` | similarity | object of comparison | I want one *similar to that*
`How would you make them [like that]?` | verb (causative) | object of verb | …make those people *enjoy* that
 | adverb of manner | referent of manner | …make those things *in that way*
`It’s not [like that]` | similarity | object of comparison | It is not *similar to that*.
 | adverb of manner | object of comparison | That's not how it is.
`It’s not [like that] would be a problem or anything.` | beginning of subordinate clause | subject | It's not *as if*…

Similarly, the error annotations were meant to be helpful, but many of them can be quite technical. In general, there seems to be an inverse relationship between the level of the mistake and the ability to explain it in a simple way. For example, *I am go there*. However, Claire’s automatic corrections are clear enough to help the learner develop the habit, which is more useful to most people than understanding technical details about a grammar point.

In addition, there are a few cases where a label was originally created for one purpose but was later found to be unnecessary or overlapping with another label. However, by that time, the engine had already become complex enough that it was no longer possible to change the label. So there may be a certain degree of imprecision in the labeling; however, it is also this fuzziness that allows Claire to handle non-native text as well as she does.

## Noun & prepositional phrases

#### Topic
A noun phrase that is the subject of a linking (copular) *be* verb, or a left-displaced object (automatically corrected).
- **Priya** is a student. **She** is diligent.
- **This information** I would like to confirm.

#### Subject
A noun phrase that is the subject of any other kind of verb.
- **Priya** went to school.

#### Infinitive subject
A noun phrase that is the subject in a “for `NOUN` to `VERB`” structure.
- Social networking makes it easy **for people** to stay connected.

#### Object
The direct object of a transitive verb, which can also (but not very often) apply to “whose `NOUN`” in a relative clause.
- I didn’t get **your message**.
- He paints paintings **whose meaning** you just can’t understand.

#### Agent
The agent of a passive verb, which starts with **by**.
- The evidence was found **by the police** yesterday.

#### Recipient
The indirect object of a ditransitive verb, or the recipient in a causative verb pattern.
- I gave **him** the key. I made **him** work.

#### Complement
A noun phrase that begins with a preposition but is not explicitly a time expression or place expression.
- You can find a lot of information **on the Internet**.

#### Noun phrase
A noun phrase whose syntactic role could not be determined.

## Verb phrases

#### Copula
Linking *be* that connects a subject to an adjective or noun phrase.
- I **am** a teacher.
- It **could have been** worse.

#### Inverted copula
Linking *be* that precedes its subject in a question.
- How **are** you?

#### Verb phrase
A non-phrasal verb that is the main verb of its clause.
- They **have launched** a new product.

#### Question auxiliary
*Do, have, be* or a modal verb that precedes its subject in a question.
- Where **are** you going?

#### Phrasal verb and object
A phrasal verb and object that is the main verb of its clause.
- I **took it out**.

#### Existential verb
*There is*.
- I think **there needs to be** a study done on this phenomenon.
- **Was there** anything else you needed?

#### Verbal complement
A verb which is a subordinate verb of another verb, adjective, or 5WH-word, which can look like `VERB`, `VERBing`, `to VERB`, or “preposition + `VERBing`”.
- I’m going to *have* him **look** at the car later.
- I *saw* her **standing** there.
- Can I *ask* you **to do** me a favor?
- Do you know *how* **to play** guitar?

#### Verbal modifier
`VERBing` or `VERBed` that forms a reduced relative clause.
- *Entries* **submitted** after the deadline will not be accepted.
- There are *many people* **watching** the debate.

#### Non-finite verb
Bare infinitives, commands, or other non-matrix verb phrases that may be in syntactically ambiguous positions.
- There’s a lot of stuff he insisted on *letting* **go** in
- What we need to remember is to *notice* what our child is doing that is good *and* **let** them know.

## Other major elements
#### Question word
Single 5WH-words that mark questions (as opposed to wh-clauses).
- **Where** did you go?

#### Question phrase
Chunks that begin with a 5WH-word and mark questions (as opposed to wh-clauses).
- **How many people** did you meet?
- **What time** is it?

#### Mark
Connecting words that begin a clause, like *because, if, since*, as well as some other fixed phrases that begin a clause.
- **If** we run late, I’ll call you.
- It’s unfortunate **because** there’s nothing we can do about it.
- **How about** a game of chess?

#### Adjective phrase
A group of words that ends in `ADJECTIVE` or “`ADJECTIVE` + enough”.
- Those people are **very intelligent**.
- Do you think this strategy will be **effective enough**?

#### Adverb phrase
A group of words that ends in `ADVERB`, a fixed expression that modifies a verb phrase, or a phrase that marks a transition.
- She talks **too quickly**, so I can’t understand her **very well**.
- **However**, this cannot be guaranteed.
- I think he did it **on purpose**.

#### Time expression
A fixed expression of group of words that denotes the time of an action.
- We’re going to see a movie **today**.
- I haven’t eaten Chinese food **in 3 months**.

#### Place expression
Particular words or prepositional phrases that explicitly denote a place.
- I found this information **online**.
- Have you ever been **to India**?

## Complex units

#### Verbal subject
“`VERBing`” as a subject, or occasionally “to `VERB`” (but Claire may misinterpret this)
- Could you tell me what the best part about **having** *a daughter* is?
- Has **playing** *cricket* helped you in any way?
- **Using** *punctuation marks* like commas and full stops helps the person you chat with understand your message better.
- Isn’t **completing** *your work* on time a good habit?

#### Cleft subject
“All/5WH + `SUBJECT` + `VERB`” or “5WH + to `VERB`” as a subject.
- **All** *I want to do* is fly away.
- **Where** *he went* is a mystery.

#### Cleft complement
Any other usage of “All/5WH + `SUBJECT` + `VERB`” or “5WH + to `VERB`”.
- This is **all** *I need*.
- I don‘t know **where** *he went*.

## Connectors

#### End of sentence
Question marks and periods.

#### Hanging preposition
A preposition that has been “stranded” at the end of a structure where its complement comes at the beginning, or a preposition whose complement could not be determined.
- *Who* is that person talking **to** on the phone?
- It is difficult to know *what* they are responsible **for**.

#### Hanging phrasal verb particle
Sometimes, the particle of a phrasal verb doesn’t get grouped in with the verb and its object.

#### Subordinate clause marker
*That* that connects a verb and a clause.
- He told me **that** *he bought a new car*.

#### Embedded question marker
*If* that connects a verb and a question clause.
- I don’t know **if** *we’ll arrive on time*.

#### Adverb clause marker
*Like* and *than* at the beginning of a clause that modify a verb.
- It is **like** *we’re floating*.
- Your English is much better **than** *you think*, you know.

#### Conjunction
*And, but, or, so* that connects to clauses, or *then* in an if-then sentence.
- *If* you find any problems, **then** please let me know.
- My car broke down, *so* I was late to work

#### Weak conjunction
*And* or *or* that connects two verb phrases or adjective phrases that share the same subject.
- But asking her *to download* the file **and** then *send* it to us is a big hassle.
- What we need to remember is to *notice* what our child is doing that is good **and** *let* them know.

#### Relative clause marker
*That, who, which* that begins a relative clause.
- There are many people **who** enjoy going to the beach.

#### Unnecessary mark
*That* that corresponds to की in Hindi (or equivalents in other Indian languages) but is not used in the same way as English.
- I will surely get people blaming **that** *why we drink cows milk*.

## Miscellaneous

#### Adjectival modifier
An adjective phrase that come after the noun phrase it modifies.
- I have collected these old things for my mom and gave her *a DVD* **full of old songs**.
- Since I am an only child, I found it strange living with *so many people* **my age**!

#### Interjection
Names that are used as direct address or fixed phrases that are not meant to be evaluated grammatically.
- How are you, **Justin**?
- **All the best** for your new project!

#### Inverted subject
Subjects that come after their verbs in specific patterns such as “Here is `NOUN`” and “`QUOTE` said `person`”.

#### Quote
A group of words set off by quotes that could not be unambiguously interpreted as a subject, object, or prepositional phrase.

#### Title
A quoted group of words that follows words like *song, word, film*.
