import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,Card
} from '@mantine/core';
import { Icon } from 'tabler-icons-react';
import image from './ACM_Logo.png';
import ClubData from "./ClubData";
import clubData from "./ClubData";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent:'start',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    content: {
        maxWidth: 480,
        paddingLeft:theme.spacing.xl,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,
        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,
        maxWidth: 200,
        [theme.fn.smallerThan('md')]: {

        },
    },

}));

export default function Clubs() {
    const { classes } = useStyles();
    return (
        <div>
            <Card>
                <div className={classes.inner}>
                    <Image src={image} className={classes.image} />
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            {ClubData.name}
                        </Title>
                        <Text color="dimmed" size={20}>Memeber: {clubData.user_count}</Text>
                        <Text color="dimmed" mt="md">
                            {clubData.description}
                        </Text>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Support
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Apply
                            </Button>
                        </Group>

                    </div>

                </div>
            </Card>
        </div>
    );
}