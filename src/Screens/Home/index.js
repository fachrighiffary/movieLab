import React,{ useEffect } from 'react';
import axios from 'axios';
import Item from 'components/Item';
import Label from 'components/Label';
import Carousel from 'react-native-anchor-carousel';
import CardMovie from './atoms/card-movie';

import { BASE_URL, LIST_MOVIE } from 'api/';
import { Dimensions, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from 'utils/colors';
import { onDataMovie } from '../../Redux/actions/movieAction';

const DeviceWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const listDataMovie = useSelector((state) => state.movies.data)

  useEffect(() => {
    getDataMovie()
  }, []);

  const getDataMovie = () => {
    axios.get(`${BASE_URL}${LIST_MOVIE}popular?api_key=7599f6bb4d0f8d41537cb8146a24736a&language=en-US&page=1`)
      .then((res) => {
        dispatch(onDataMovie([
          { key: 'left-spacer' },
          ...res.data.results,
          { key: 'right-spacer' }
        ]))
      })
      .catch((err) => {
        console.log(err);
      })
  }


  const renderItem = ({ item, index }) => {
    if (item.key) {
      return null
    } return (
      <CardMovie navigation={navigation} item={item} key={index} />
    )
  };


  return (
    <Item flex backgroundColor={colors.BLACK} paddingHorizontal={10}>
      <Item justifycenter alignCenter marginTop={18}>
        <Label color={colors.WHITE} size={38}>MOVIE LAB</Label>
      </Item>
      <Carousel
        initialIndex={1}
        style={styles.carousel}
        data={listDataMovie}
        renderItem={renderItem}
        itemWidth={DeviceWidth - 100}
        inActiveOpacity={0.3}
        separatorWidth={0}
        containerWidth={DeviceWidth}
      />
    </Item>
  );
};

export default Home;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});
