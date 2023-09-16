const Portfolio = require('../../models/portfolio')

module.exports = {
  getHome,
  getProjects,
  getAbout,
  getContact,
}


// Function to get the home section of the portfolio
async function getHome(req, res) {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio || !portfolio.home) {
      return res.status(404).json({ message: 'Home section not found in portfolio data' });
    }

    res.status(200).json({ home: portfolio.home });
  } catch (error) {
    console.error('Error in getHome:', error);
    res.status(500).json({ error: error.message });
  }
}

async function getProjects(req, res) {
  try {
    const portfolio = await Portfolio.findOne()
    if (!portfolio || !portfolio.projects) {
      return res.status(404).json({ message: 'Projects section not found in portfolio data' });
    }
    res.status(200).json({ projects: portfolio.projects })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


async function getAbout(req, res) {
  try {
    const portfolio = await Portfolio.findOne()
    if (!portfolio || !portfolio.about) {
      return res.status(404).json({ message: 'About me section not found in portfolio data' });
    }
    res.status(200).json({ about: portfolio.about })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function getContact(req, res) {
  try {
    const portfolio = await Portfolio.findOne()
    if (!portfolio || !portfolio.contact) {
      return res.status(404).json({ message: 'Contact section not found in portfolio data' });
    }
    res.status(200).json({ contact: portfolio.contact })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

