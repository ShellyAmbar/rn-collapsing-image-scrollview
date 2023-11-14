import { GlobalColors } from '@equalbill/styles/global-colors';
import { height, width } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';
const createStyles = (imageHeight: number) =>
  StyleSheet.create({
    DataContainer: {
      zIndex: 200,
      height: '100%',
      width: '100%',
      flex: 1,
      backgroundColor: GlobalColors.BgColors.Bg1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 100,
      alignItems: 'center',
      marginTop: imageHeight,
    },
    scroll: {
      zIndex: 100,
      width: '100%',
      height: '100%',
    },

    container: {
      flex: 1,
      backgroundColor: '#F2F1F6',
      alignItems: 'center',
      height: height,
      width: width,
    },
    backButton: {
      zIndex: 150,
      position: 'absolute',
      start: 16,
      marginTop: 30,
    },

    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: 600,
      marginTop: 80,
      paddingHorizontal: 20,
      alignItems: 'center',
    },

    title: {
      fontSize: 24,
      color: GlobalColors.TextColors.primary,
      fontWeight: '600',
      marginBottom: 20,
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Assistant-Bold',
    },

    image: {
      zIndex: 0,
      right: 0,
      left: 0,
      position: 'absolute',
      height: imageHeight,
      width: '100%',
      resizeMode: 'contain',
    },
  });

export default createStyles;
