import React from 'react'
import { StyleSheet, View } from 'react-native'

const Item = ({
  children,
  flex,
  justifycenter,
  alignCenter, }) => {
  return (
    <View style={[
      flex ? { flex: 1 } : null,
      justifycenter ? { justifyContent: 'center' } : null,
      alignCenter ? { alignItems: 'center' } : null
    ]}>
      {children}
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})