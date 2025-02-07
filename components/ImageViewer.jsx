import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import PropTypes from "prop-types";

export default function ImageViewer({ imgSource, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

ImageViewer.propTypes = {
  imgSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  selectedImage: PropTypes.string,
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
