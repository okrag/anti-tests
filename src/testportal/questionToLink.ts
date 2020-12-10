// https://github.com/Lumm1t/anti-testportal

const getQuestionGoogleQueryURL = (query: string): string =>
  `https://google.com/search?q=${query}`;

const getQuestionElement = (): Element =>
  document?.querySelector(
    "#questionForm > div > div.question-container > div.question_essence > p",
  );

const doesContainHTMLTags = (str: string): boolean => /(<([^>]+)>)/i.test(str);

export const modfiyQuestionToLink = (): void => {
  const question = getQuestionElement();
  if (doesContainHTMLTags(question.innerHTML)) return;
  const href = getQuestionGoogleQueryURL(question.innerHTML);
  question.innerHTML = `<a href="${encodeURI(href)}" target="__blank">${
    question.innerHTML
  }</a>`;
};
