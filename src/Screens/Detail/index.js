import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from 'components/Item'
import Label from 'components/Label'

import { BASE_URL } from 'api/'
import { Image, ImageBackground, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { colors } from 'utils/colors'
import Loading from 'components/Loading'
const { height, width } = Dimensions.get('screen')

const DeatilMovies = ({ route }) => {

    const [detailData, setDetailData] = useState({})
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getDetail()
    }, [])
    const getDetail = () => {
        axios.get(`${BASE_URL}movie/${route.params}?api_key=7599f6bb4d0f8d41537cb8146a24736a&language=en-US`)
            .then((res) => {
                setDetailData(res.data)
                setLoad(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (

        <Item flex backgroundColor={colors.BLACK}>
            {load ? (
                <Loading />
            ) : (
                <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${detailData.backdrop_path}` }} style={styles.backdrop} blurRadius={3}>
                    <Item paddingHorizontal={10}>
                        <Label size={28} color={colors.WHITE}>{detailData.original_title}</Label>
                        <Label size={14} color={colors.WHITE}>Release Date : {detailData.release_date}</Label>
                    </Item>
                    <ScrollView style={styles.container}>
                        <Item width={width} alignCenter marginTop={12}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${detailData.poster_path}` }} style={styles.imgPoster} />
                        </Item>
                        <Item marginTop={12} paddingHorizontal={5} paddingVertical={5} backgroundColor={'darkgrey'} borderRadius={10}>
                            <Label size={18} color={colors.WHITE}>OVERVIEW : </Label>
                            <Label color={colors.WHITE}>
                                {detailData.overview}
                            </Label>
                        </Item>
                        <Item marginTop={10}>
                            <Label size={18} color={colors.WHITE}>Genres : </Label>
                            <Item flexDirection={'row'} marginTop={10}>
                                {detailData.genres && detailData.genres.map((item) => {
                                    return (
                                        <Item backgroundColor={colors.WHITE} paddingHorizontal={5} paddingVertical={5} marginRight={5} borderRadius={8} justifycenter alignCenter>
                                            <Label size={14} color={colors.BLACK}>{item.name}</Label>
                                        </Item>
                                    )
                                })}
                            </Item>
                        </Item>
                        <Item marginTop={10}>
                            <Label size={18} color={colors.WHITE}>Rating : {detailData?.vote_average?.toFixed(1)}</Label>
                        </Item>
                    </ScrollView>
                </ImageBackground>
            )}
        </Item>
    )
}

export default DeatilMovies

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    backdrop: {
        flex: 1,
    },
    imgPoster: {
        height: 350,
        width: 243
    }
})