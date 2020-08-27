import colors from '../../utils/color';

const style = {
    contenair: {
        flex: 1, 
        flexDirection: "column", 
        position: 'relative',
        alignItems: 'center',
        paddingTop: 150,
        backgroundColor: colors.beige,
    },
    image: {
        width: 300, 
        height: 300, 
        position: 'relative', 
        top: 120,
        opacity: 0.5
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        color: colors.blue,
    }
}

export default style;