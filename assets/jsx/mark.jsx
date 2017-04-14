import Link from './link';

export default () => (
    <div>
        <header>
            <h1>Mark Larah</h1>
            <aside><i>Developer of fine artisanal software</i></aside>
        </header>

        <h2>48656C6C6F20546865726521</h2>
        <p>I am a Software Engineer from the UK currently working on web infrastructure at <Link url="https://www.yelp.com">Yelp</Link>.</p>
        
        <h2>More Info</h2>
        <ul>
            <li><Link url="https://blog.larah.me" /></li>
            <li><Link url="https://uk.linkedin.com/in/marklarah" /></li>
            <li><Link url="https://twitter.com/mark_larah" /></li>
            <li><Link url="https://github.com/magicmark" /></li>
        </ul>
    </div>
)
