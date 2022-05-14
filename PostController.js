import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture)
      res.json(post);
    } catch (err) {
      res.status(500).json(err)
    }
  };

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts)

    } catch (err) {
      console.log(err)
    }
  };
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  async update(req, res) {
    try {
     
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost)
    } catch (err) {
      console.log(err)
    }
  }
  async delete(req, res) {
    try {    
      const post = await PostService.delete(req.params.id)
      return res.json(post)
    } catch (err) {
      console.log(err)
    }
  }
};

export default new PostController();