import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginRight: 8,
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius:  4.65,
    elevation: 5,
    borderTopRightRadius:20,
  },
  image: {
    width: "200px",
    height: "130px",
    borderRadius: 20,
  },
  cardMain: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  title: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingSec: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  locationSec: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  location: {
    opacity: "0.6",
  },
});

export default styles;
