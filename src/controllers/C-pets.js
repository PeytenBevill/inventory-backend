const pool = require('../sql/connection')

const list = (req, res) => {
  pool.query('SELECT * FROM pets WHERE user_id = ?',[user_id], (err, rows, fields) => {
    if(err){
      return res.status(500).json({message: err.message})
    } 
    res.json(rows)
  })
}

// const show = (req, res) => {
//   const {id} = req.params
//   pool.query(`SELECT * FROM pets WHERE id = ${id}`, (err, row, fields) => {
//     if(err){
//       return res.status(500).json({message: err.message})
//     } 
//     res.json(row)
//   })
// }
//create
const create = (req, res) => {
  const {body} = req
  const {user_id, post_category, post_instructions} = body
  pool.query(
    'INSERT INTO pets (user_id, post_category, post_instructions) VALUES (?, ?, ?)',
    [user_id, post_category, post_instructions], (err, row, fields) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      const newPostId = result.insertId;
      res.json({ message: 'Post created successfully', postId: newPostId });
    })
  }


//update
const update = (req, res) => {
  const postId = req.params.id;
  const updatedData = req.body;

  pool.query(
    'UPDATE pets SET ? WHERE id = ?',
    [updatedData, postId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json({ message: 'Post updated successfully' });
    }
  );
};

//delete
const deletePost = (req, res) => {
  const postId = req.params.id;
  
  pool.query('DELETE FROM pets WHERE id = ?', [postId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  });
};

const deletePet = (req, res) => {
  const petId = req.params.id;
  
  pool.query('DELETE FROM pets WHERE id = ?', [petId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.json({ message: 'Pet deleted successfully' });
  });
};



module.exports = {
  list,
  create,
  update,
  deletePet,
  deletePost
}