import { getPosts, setPosts } from './data';

const Posts = {
  async getAll({ includeDeleted }) {
    log('Executing Posts.getAll with', { includeDeleted });
    await sleep();
    const data = getPosts();
    return includeDeleted ? data : data.filter(post => !post.deleted);
  },

  async update(id, params) {
    log(`Executing Posts.update with id: ${id}, params:`, params);
    await sleep();
    const data = [...getPosts()];
    const index = data.findIndex(post => post.id === id);
    if (index < 0) {
      throw new Error(`Post not found with id: ${id}`);
    }
    data[index] = { ...data[index], ...params };
    setPosts(data);
    return data[index];
  },
};

export default Posts;

// Sleep for a random amount of time between 0 and 2 seconds
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000 * 2 * Math.random()));

function log(...args) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args);
  }
}
