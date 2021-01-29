let posts = [
  {
    id: 1,
    deleted: false,
    title: 'React as a UI Runtime',
    body:
      'This is a deep dive — THIS IS NOT a beginner-friendly post. In this post, I’m describing most of the React programming model from first principles. I don’t explain how to use it — just how it works.\n' +
      '\n' +
      'It’s aimed at experienced programmers and folks working on other UI libraries who asked about some tradeoffs chosen in React. I hope you’ll find it useful!',
  },
  {
    id: 2,
    deleted: true,
    title: 'Preparing for a Tech Talk, Part 1: Motivation',
    body:
      'What motivates you to give a talk?\n' +
      '\n' +
      'Maybe giving talks is a part of your current job. Maybe you want to gain more recognition in the industry so you can land a better job or get a raise. Maybe you’re out there to bring more attention to your hobby or work project.\n' +
      '\n' +
      'We’ll call these motivations external. They are about what other people think of you and your work. But if you already had all the respect and money that you wanted, would you still choose to give a talk? Why?',
  },
  {
    id: 3,
    deleted: false,
    title: 'How Are Function Components Different from Classes?',
    body:
      'For a while, the canonical answer has been that classes provide access to more features (like state). With Hooks, that’s not true anymore.\n' +
      '\n' +
      'Maybe you’ve heard one of them is better for performance. Which one? Many of such benchmarks are flawed so I’d be careful drawing conclusions from them. Performance primarily depends on what the code is doing rather than whether you chose a function or a class. In our observation, the performance differences are negligible, though optimization strategies are a bit different.',
  },
  {
    id: 4,
    deleted: false,
    title: 'The WET Codebase',
    body:
      'In this talk, my aim was to show why strict adherence to writing code that is free of duplication inevitably leads to software we can’t understand. While you could watch this talk by yourself, I tried to make it a good starting point for a team discussion. If you drop it in Slack, tell me what your teammates thought!\n' +
      '\n' +
      'I hope you’ll enjoy watching this talk as much as I enjoyed presenting it. I would like to thank Gary and the team for organizing a stellar conference. I’m also thankful to Sebastian, Sandi, and Cheng for the talks that inspired this one.\n' +
      '\n' +
      'I miss conferences. Hope to see you all soon.',
  },
];

export const getPosts = () => posts;
export const setPosts = newData => {
  posts = newData;
};
