import colors from '../../utils/color';

const style = {
    contenaire: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 200,
        backgroundColor: colors.white,
    },
    image: {
        // flex: 1,
        width: 100,
        height: 250,
        margin: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    imageNutriScore: {
        width: 100,
        height: 30,
        marginRight: 30,
        position: 'relative',
        right: 10,
    },
    scrollView:{
        height: 20,
    },
    headerContent: {
        justifyContent: 'center',
    },
    quantity: {
        fontSize: 20,
    },
    nutriLabel: {
        marginTop: 5,
    },
    scrollTitle: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 30,
    },
    imageYesNo: {
        width: 12,
        height: 20,
        marginLeft: 10,
    }
}

export default style;