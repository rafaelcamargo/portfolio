const stories = [
  {
    id: 1,
    en: {
      title: "Title 1",
      description: "Description 1",
      url: {
        href: "https://some.story.com/en/1"
      },
    }
  },
  {
    id: 2,
    image: {
      filename: "story.svg",
      alt: "story illustration 2"
    },
    en: {
      title: "Title 2",
      description: "Description 2",
      url: {
        href: "https://some.story.com/en/2",
        target: "_self"
      },
    }
  },
  {
    id: 3,
    image: {
      filename: "story-1.svg",
      alt: "story illustration 3"
    },
    en: {
      title: "Title 3",
      description: "Description 3",
      url: {
        href: "https://some.story.com/en/3",
        target: "_blank"
      }
    },
    pt: {
      title: "Título 3",
      description: "Descrição 3",
      url: {
        href: "https://some.story.com/pt/3",
        target: "_blank"
      }
    }
  }
];

export default stories;
