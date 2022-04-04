


function writeUserData(userId, name, email, imageUrl) {
  try {
    try {
      const db = firebase.getDatabase();
    } catch (error) {
      alert(error.value)
    }
      
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
  } catch (error) {
    alert(error.value)
  }

  }