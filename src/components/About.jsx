function About() {
    return (
        <section style={{
            backgroundColor: '#f0a8b3',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '1.5rem',
            gap: '8px'
        }}>
        <h2 style={{fontSize: '1.4rem', color: 'white', textAlign: 'center', fontWeight: 700,}} id='about'>About Us</h2>
        <div style={{
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: 500
        }}>
            <p>
                We are a creative agency passionate about turning bold ideas
                into exceptional digital experiences. From concept to launch,
                we craft thoughtful designs and powerful solutions that help
                brands stand out in a crowded world.
            </p>
            <p>
                Our portfolio reflects the diversity of our work — spanning
                web design, branding, motion, and beyond. Every project we
                take on is driven by a simple belief: great work should not
                just look good, it should perform, connect, and inspire.
            </p>
            <p>
                Whether you are a startup finding your voice or an established
                brand ready for something new — we are here to build it
                with you.
            </p>
        </div>
        </section>
    )
}
export default About;