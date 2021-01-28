import { getData, setData } from './data';

const Posts = {
  async getAll({ includeDeleted = false } = {}) {
    console.group('Executing Posts.getAll');
    console.log({ includeDeleted });
    console.groupEnd();

    await sleep();
    const data = getData();
    return includeDeleted ? data : data.filter(post => !post.deleted);
  },

  async update(id, params) {
    console.group('Executing Posts.update');
    console.log({ id, params });
    console.groupEnd();

    await sleep();
    const data = getData();
    const index = data.findIndex(post => post.id === id);
    data[index] = { ...data[index], ...params };
    setData([...data]);
    return data[index];
  },
};

export default Posts;

// Sleep for a random amount of time between 0 and 2 seconds
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000 * 2 * Math.random()));
