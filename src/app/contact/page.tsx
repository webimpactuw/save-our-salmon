import { UnstyledLink } from '../components/UnstyledLink';

const Contact = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 40rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3.5rem',
        paddingTop: '10rem',
      }}
    >
      <div
        style={{
          color: 'var(--dark-blue)',
          fontSize: '7.5rem',
          fontWeight: '600',
        }}
      >
        Drop us a line!
      </div>
      <UnstyledLink
        href="mailto:art@salmonmurals.org"
        style={{ fontSize: '2.5rem' }}
      >
        art@salmonmurals.org
      </UnstyledLink>
    </div>
  );
};

export default Contact;
