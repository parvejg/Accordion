import { useState } from "react";
import "./AccordionList.css";
export const AccordionLinkList = () => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  return (
    <div className="accordionLinks-container">
      <button className="accordion-link" onClick={() => setActive((e) => !e)}>
        Section 1
      </button>
      {isActive && <Paragraph />}

      <button className="accordion-link" onClick={() => setActive2((e) => !e)}>
        Section 2
      </button>
      {isActive2 && <Paragraph2 />}
      <button className="accordion-link" onClick={() => setActive3((e) => !e)}>
        Section 3
      </button>
      {isActive3 && <Paragraph3 />}
    </div>
  );
};
export const Paragraph = () => {
  return (
    <p className="paragraph-text">
      Paragraphs are the building blocks of papers. Many students define
      paragraphs in terms of length: a paragraph is a group of at least five
      sentences, a paragraph is half a page long, etc. In reality, though, the
      unity and coherence of ideas among sentences is what constitutes a
      paragraph.
    </p>
  );
};
export const Paragraph2 = () => {
  return (
    <p className="paragraph-text">
      Paragraph development begins with the formulation of the controlling idea.
      This idea directs the paragraph’s development. Often, the controlling idea
      of a paragraph will appear in the form of a topic sentence. In some cases,
      you may need more than one sentence to express a paragraph’s controlling
      idea.
    </p>
  );
};
export const Paragraph3 = () => {
  return (
    <p className="paragraph-text">
      The next movement in paragraph development is an explanation of each
      example and its relevance to the topic sentence. The explanation should
      demonstrate the value of the example as evidence to support the major
      claim, or focus, in your paragraph.
    </p>
  );
};
