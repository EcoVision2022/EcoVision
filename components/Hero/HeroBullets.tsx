import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import { useScrollIntoView } from '@mantine/hooks';
import { Tabs } from '@mantine/core';
import { IconRecycle, IconPlant, IconWind } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AreaChart, Area } from 'recharts';
import React from 'react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return {
    date,
    time,
    wish,
  };
};

const data = [
  {
    name: 'Cans',
    uv: 18,
    pv: 10,
    rv: 5,
    amt: 18,
  },
  {
    name: 'Plastic',
    uv: 50,
    pv: 20,
    rv: 10,
    amt: 60,
  },
  {
    name: 'Metal',
    uv: 5,
    pv: 2,
    rv: 25,
    amt: 0,
  },
  {
    name: 'Paper',
    uv: 40,
    pv: 20,
    rv: 10,
    amt: 0,
  },
  {
    name: 'Glass',
    uv: 25,
    pv: 25,
    rv: 5,
    amt: 0,
  },
];

const data2 = [
  {
    name: '2021 Q1',
    uv: 3000,
    amt: 2400,
  },
  {
    name: '2022 Q1',
    uv: 3300,
    amt: 2210,
  },
  {
    name: '2022 Q2',
    uv: 3600,
    amt: 2290,
  },
  {
    name: '2022 Q3',
    uv: 4125,
    amt: 2000,
  },
  {
    name: '2022 Q4',
    uv: 4600,
    amt: 2181,
  },
  {
    name: '2023 Q1',
    uv: 4750,
    amt: 2500,
  },
  {
    name: '2023 Q2',
    uv: 5100,
    amt: 2100,
  },
];
export function HeroBullets() {
  const { classes } = useStyles();
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({
    easing: (t) =>
      t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * targetRef.current.offsetLeft + 2, 5) / 2,
  });

  const [co, setCo] = useState(0);

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> city <br /> for a better future
            </Title>
            <Text color="dimmed" mt="md">
              Designed with the principles of ecology and sustainability in mind, integrating
              natural systems with human development to create a harmonious and resilient community.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Green spaces</b> - Biodiversity is valued and preserved, and urban planning is
                made with it in mind.
              </List.Item>
              <List.Item>
                <b>Waste management</b> – Recycling systems are in place, and waste is minimized.
              </List.Item>
              <List.Item>
                <b>Sustainability</b> – Renewable e:w nergy sources such as solar, wind and hydro
                are utilized to power the city.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  scrollIntoView(targetRef);
                }}
              >
                See stats
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
      <div>
        <Container
          style={{
            marginTop: '50vh',
            alignContent: 'center',
            alignItems: 'center',
            left: '50%',
            flex: 1,
            justifyContent: 'center',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            paddingTop: '50vh',
            paddingBottom: '50vh',
          }}
          id="stats"
          ref={targetRef}
        >
          <Tabs color="green" variant="pills" defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" icon={<IconRecycle size="0.8rem" />}>
                Recycling Center
              </Tabs.Tab>
              <Tabs.Tab value="messages" icon={<IconPlant size="0.8rem" />}>
                Green Area
              </Tabs.Tab>
              <Tabs.Tab value="settings" icon={<IconWind size="0.8rem" />}>
                C02 Levels
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <ResponsiveContainer width={1000} height={600}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uv" stackId="a" name="Recycled 50%" fill="#53c28b" />
                  <Bar dataKey="pv" stackId="a" name="Recycled 80%" fill="#009245" />
                  <Bar dataKey="rv" stackId="a" name="Reutilised" fill="#6ac758" />
                </BarChart>
              </ResponsiveContainer>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              <ResponsiveContainer width={1000} height={600}>
                <AreaChart
                  width={500}
                  height={400}
                  data={data2}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#40c057" />
                </AreaChart>
              </ResponsiveContainer>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
              <Text mt="xl" style={{ textAlign: 'center', fontWeight: 'bold' }} size="xl">
                <Text mt="xl" style={{ color: 'green', fontWeight: 'bold', fontSize: 64 }}></Text>
              </Text>
            </Tabs.Panel>
          </Tabs>
        </Container>
      </div>
    </div>
  );
}
