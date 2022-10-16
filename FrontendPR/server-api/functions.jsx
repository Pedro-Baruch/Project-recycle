const handleDelete = async (post) => {
    await axios.delete(URL + "/" + post.id + post);
    setPosts(posts.filter((p) => p.id !== post.id)); {/* useState posts */}
  };


  const handleUpdate = async (post) => {
    post.title = "Updated";
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts  ];{/* useState posts */}
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };