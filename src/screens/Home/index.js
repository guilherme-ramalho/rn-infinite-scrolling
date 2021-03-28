import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';

import {Container} from './styles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = () => {
    fetch(`https://dummyapi.io/data/api/post?page=1&limit=10`, {
      headers: {
        'app-id': '5fc42e8d5dfaf5c04f2ef03a',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getPosts, []);

  return (
    <Container>
      {isLoading && posts.length === 0 ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Text>{item.id}</Text>}
        />
      )}
    </Container>
  );
};

export default Home;
