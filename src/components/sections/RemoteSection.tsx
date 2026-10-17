import { motion } from 'framer-motion';
import { Clock, FileCheck, Laptop, MessageSquare } from 'lucide-react';
import type { ReactNode } from 'react';
import './RemoteSection.css';

interface RemoteCard {
  icon: ReactNode;
  title: string;
  text: ReactNode;
}

const remoteCards: RemoteCard[] = [
  {
    icon: <Clock size={22} />,
    title: 'Timezone & Overlap',
    text: (
      <>
        Based in Jakarta (<strong>UTC+7</strong>). Live overlap with Singapore, India, and the
        Gulf; evening overlap with the UK and EU; async-first with US and Canada.
      </>
    )
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'How I Work',
    text: (
      <>
        Written specs, documented decisions, and PR-based reviews. Daily English across
        <strong> Slack, Jira, Confluence, and GitHub</strong>.
      </>
    )
  },
  {
    icon: <FileCheck size={22} />,
    title: 'Engagement',
    text: (
      <>
        Open to full-time remote roles as a <strong>contractor</strong> (Deel/Wise/Payoneer) or
        via <strong>EOR</strong>. Available to start immediately.
      </>
    )
  },
  {
    icon: <Laptop size={22} />,
    title: 'Home Office',
    text: (
      <>
        Dedicated workspace, stable broadband with <strong>LTE backup</strong>, and a quiet
        setup for calls and workshops.
      </>
    )
  }
];

const RemoteSection = () => {
  return (
    <section id="remote" className="remote">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Remote Ready.</h2>
          <p className="remote-subtitle">
            How I work with distributed teams — and what you can count on from day one.
          </p>
        </motion.div>

        <div className="remote-grid">
          {remoteCards.map((card, index) => (
            <motion.div
              key={index}
              className="remote-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="remote-icon-wrapper">{card.icon}</div>
              <h3 className="remote-title">{card.title}</h3>
              <p className="remote-text">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemoteSection;
