import * as React from 'react';
import styled from 'styled-components';
import Auth from './Auth';
import Link from './Link';

const Container = styled.div`
    transform: skew(1deg);
`;

const Mark = () => (
    <Container>
        <header>
            <h1>Mark Larah</h1>
            <aside>
                <i>Developer of fine artisanal software</i>
            </aside>
        </header>

        <h2>48656C6C6F20546865726521</h2>
        <p>
            I am a Software Engineer from the UK currently working on web
            infrastructure at <Link href="https://www.yelp.com">Yelp</Link>.
        </p>

        <h2>More Info</h2>
        <ul>
            <li>
                <Link href="https://blog.larah.me" />
            </li>
            <li>
                <Link href="https://uk.linkedin.com/in/marklarah" />
            </li>
            <li>
                <Link href="https://twitter.com/mark_larah" />
            </li>
            <li>
                <Link href="https://github.com/magicmark" />
            </li>
        </ul>

        <h2>Projects</h2>
        <ul>
            <li>
                <Link href="https://composerize.com/">Composerize</Link>
            </li>
            <li>
                <Link href="https://github.com/sharkcore/tweenz">Tweens</Link>
            </li>
        </ul>
        <Auth />
    </Container>
);

export default Mark;
