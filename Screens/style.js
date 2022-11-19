import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:5,
    },
    main:{
        display:"flex",
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 10,
        paddingBottom:10,
        marginTop: 10,
        justifyContent: "space-between",
        
    },
    logo:{
        height:50,
        width:50,
        borderRadius:"50%",
        backgroundColor:"#EEFEFC"

    },
    header:{
        flex:1 
    },
    deliver:{
        fontWeight:"bold",
        color:"gray",
        fontSize:10,

    },
    location:{
        fontWeight:"bold",
        color:"black",
        fontSize:20,

    },
    userIcon:{
       
        marginRight: "13px",
        backgroundColor: "#EEFEFC",
        borderRadius: "50%",
    },
    searchSection:{
        position:"relative",
        flexDirection: "row",
        alignItems: 'center',
        paddingBottom:5,
        marginLeft:5,
        justifyContent: "space-between",
        display: "flex",
        paddingRight:10,

    },
    search:{
        flexDirection: "row",
        alignItems: 'center',
        width: "90%",
        height: "28px",
        backgroundColor: "#F3F6F9",
        padding: "3px", 
        marginLeft: 10, 
    },
    searchIcon:{
        position:"absolute",
        borderRight: "1px solid",

    },
    searchInput:{
        paddingLeft: "20px",
        width: "100%",
        height: "100%",
        outline: "none",
    },
    scrollView:{
        backgroundColor:"#F2F2F2",
        paddingBottom:10,
    },
})
export default styles;