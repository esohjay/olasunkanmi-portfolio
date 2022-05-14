export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "goal",
      title: "Goal",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "result",
      title: "Result",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
    },

    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
        {
          type: "code",
          options: {
            theme: "terminal",
          },
        },
      ],
    },
  ],
};
