import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 20,
    },
    scrollView: {
      marginBottom: 20,
    },
    imageContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
    },
    btn:{
        backgroundColor: '#FFB6C1',
        width: '80%',
        padding: 10,
        borderRadius: 10
    },
  });
  