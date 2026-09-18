---
title: Tutorial — Retrieval Augmented Generation with Citation (RAG+C)
summary: A tutorial and demo chatbot showing how to ground LLM answers in source documents, using the U.S. Federal Acquisition Regulation as the test case.
role: Deep Learning course project
date: 2024-01-15
tags: [LLMs, RAG, NLP, Python]
url: https://huggingface.co/spaces/smkerr/rag-chat
repo: https://github.com/smkerr/tutorial-rag-c
featured: true
draft: false
---

Built with Kai Foerster and Amin Oueslati as a final project for the Deep Learning course at the Hertie School. RAG+C provides large language models with additional context sourced from an external database, improving response accuracy and avoiding hallucinations on domain-specific topics, while surfacing citations for every claim.

As a demonstration, we built a chatbot to answer questions about the U.S. Federal Acquisition Regulation (FAR), the rule book for public procurement in the United States. The tutorial covers loading and processing FAR documents, storing them in a database, building the RAG+C pipeline, and deploying the result as a conversational interface. The demo, "FAR-Chat," is hosted on Hugging Face Spaces.
