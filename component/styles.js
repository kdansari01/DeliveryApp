
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    categoryContainer:{
        position: "relative",
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        marginRight:10,
    },

    categoryImage:{
        width:"80px",
        height:"80px",
        objectFit:"cover",
    },
    categoryTitle:{
        position:"absolute",
        color:"white",
        bottom:0,
        fontSize:14,
        fontWeight:"bold",
    },


    // featured
    featureContainer:{
        marginTop:16,

    },

    mainFetured:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
    },
    featuredTitle:{
        fontSize:19,
        fontWeight:"bold",

    },
    featuredDesc:{
        fontSize:10,
        opacity:"0.5",
        paddingLeft:10,
        paddingRight:10,
    }
})







export default styles;