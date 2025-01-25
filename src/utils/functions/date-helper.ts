import moment from "moment"

const FULL_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss"

export const formatDate = (date: Date | string) => {
    return moment(date).format(FULL_DATE_FORMAT)
}

export const getCurrentDate = () => {
    return moment().format(FULL_DATE_FORMAT)
}