import React,{Component} from "react";
import { withSnackbar } from 'notistack';

export class notification extends Component{
    handleConnectionLoss = () => {
        this.key = this.props.enqueueSnackbar('??????????????');
    };

    handleBackOnline = () => {
        this.props.closeSnackbar(this.key);
    };

    render() {
        //...
        return(<div>??</div>)
    };
}
export default withSnackbar(notification);
