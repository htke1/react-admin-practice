import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        backgroundColor: 'purple'
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
        color: 'gold'
    },
   
});

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    const classes = useStyles();
    console.log(typeof(record.source));
    return record ? (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    ) : null;
}

export default MyUrlField;