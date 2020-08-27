import BarCodeScreen from '../screens/BarCode';
import ErrorScreen from '../screens/Error';
import FavorisScreen from '../screens/Favoris';
import HistoriqueScreen from '../screens/Historique';
import DetailsBarCodeScreen from '../screens/DetailsBarCode';
import SplashScreen from '../screens/SplashScreen';
import RouterScreen from '../screens/RouterScreen';

// Icon :
import CodeBar from '../components/Icon/codebar';
import Hearth from '../components/Icon/hearth';
import Historique from '../components/Icon/historique';

const roadMap = [
    { name: 'RouterScreen', component: RouterScreen, inTab: true },
    { name: 'Historique', component: HistoriqueScreen, inTab: true, icon: Historique },
    { name: 'BarCode', component: BarCodeScreen, inTab: true, icon: CodeBar },
    { name: 'Favoris', component: FavorisScreen, inTab: true, icon: Hearth },
    { name: 'Error', component: ErrorScreen, inTab: false },
    { name: 'DetailsBarCode', component: DetailsBarCodeScreen, inTab: false },
    { name: 'SplashScreen', component: SplashScreen, inTab: false },
];

export default roadMap;


