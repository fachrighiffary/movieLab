import React from 'react'
import Item from 'components/Item'
import LabelSplash from 'splash/atom/label-splash'

const Splash = ({navigation}) => {
  return (
    <Item flex justifycenter alignCenter>
       <LabelSplash navigation={navigation} />
    </Item>
  )
}

export default Splash