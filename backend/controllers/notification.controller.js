import Notification from "../models/notification.model.js"
export const getNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        const notifications = await Notification.find({to: userId}).populate({
            "path": "from",
            select: "username profileImg "

        })
        await Notification.updateMany({to: userId}, {read:true});
        res.status(200).json(notifications);
    } catch (error) {
        console.log("Error in getNotifications function", error.message);
        res.status(500).json({error: "Internal Server Error"});
        
    }
}

export const deleteNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        await Notification.deleteMany({to:userId})

        res.status(200).json({message: "Notifications  deleted successfully"});

    } catch (error) {
        console.log("Error in deleteNotifications function",error.message);
        res.status(500).json({error: "Internal Server Error"});

    }
}

export const deleteNotification = async (req, res) => {
    try {
        const userId = req.user._id;
        const notificationId = req.params.id;
        const notification = await Notification.find(notificationId)

        if(!notification){
            return res.status(200).json({error: "Notification  deleted successfully"});
        }

        if(notification.to.toString() !== userId.toString()){
            res.status(200).json({message: "You are not allowed"});
        }
        await Notification.findByIdAndDelete(notificationId);
        res.status(200).json({message: "Notification  not found"});

    } catch (error) {
        console.log("Error in deleteNotification function",error.message);
        res.status(500).json({error: "Internal Server Error"});

    }
}