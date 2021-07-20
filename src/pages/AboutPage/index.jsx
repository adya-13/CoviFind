import React from 'react';

// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import { Grid, Typography, Hidden } from '@material-ui/core';
import Tip from '../../components/Tip';

import medicalMask from '../../assets/medical-mask 1.png';
import hands from '../../assets/washing-hands 1.png';
import liquidSoap from '../../assets/liquid-soap 1.png';
import socialDist from '../../assets/social-distancing 1.png';


const useStyles = makeStyles(styles);

function AboutPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Hidden mdUp>
                    <Grid xs={12}>
                        <Typography variant="h5" className={classes.brandingName}>
                            Indi<Typography variant="h5" className={classes.secondaryColorBrandingName}>Cov</Typography>
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid
                container
            >
                <Grid
                    container
                >
                    <Grid item sm={12}><Typography variant="h4" className={classes.title}>Basic Prevention Methods</Typography></Grid>
                    <Grid container sm={12} md={6}>
                        <Tip
                            image={medicalMask}
                            title={"Face covers/masks"}
                            description={
                                "Wear a mask in public and ensure it covers your nose and mouth and is secure under the chin."
                            }
                        />
                        <Tip
                            image={hands}
                            title={"Wash Hands frequently"}
                            description={
                                "Wash hands with soap and water for at least 20 seconds and avoid touching your face."
                            }
                        />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Tip
                            image={liquidSoap}
                            title={"Use of sanitizers"}
                            description={
                                "Use an alcohol-based sanitizer to prevent the spread of germs."
                            }
                        />
                        <Tip
                            image={socialDist}
                            title={"Physical distancing"}
                            description={
                                "Stay at least 6 feet apart from people who don't live with you, and avoid close contact with sick people."
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>


        </div>
    );
}

export default AboutPage;
