function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading-1 text-center mb-8">About Among Us</h1>

      <div className="max-w-4xl mx-auto bg-among-space rounded-lg p-8 mb-12 shadow-lg">
        <h2 className="heading-2 mb-6 text-white">Our Story</h2>
        <p className="body-normal text-gray-300 mb-4">
          Among Us was created by a small indie game studio called InnerSloth.
          The game was released in 2018 but gained massive popularity in 2020
          during the COVID-19 pandemic when everyone was looking for ways to
          connect with friends remotely.
        </p>
        <p className="body-normal text-gray-300 mb-4">
          What started as a simple party game inspired by the social deduction
          game Mafia became a worldwide phenomenon, bringing friends together to
          determine who among them is the impostor.
        </p>
        <p className="body-normal text-gray-300">
          Today, Among Us continues to evolve with new maps, roles, and features
          while maintaining the core gameplay that millions have come to love.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="heading-2 text-center mb-8 text-white">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-among-space rounded-lg overflow-hidden text-center p-6 shadow-lg">
            <img
              src="../../public/images/person/person1.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="heading-4 text-white mb-1">Alex Johnson</h3>
            <p className="body-normal text-among-blue mb-3">Game Designer</p>
            <p className="body-small text-gray-400">
              The creative mind behind Among Us unique gameplay mechanics.
            </p>
          </div>

          <div className="bg-among-space rounded-lg overflow-hidden text-center p-6 shadow-lg">
            <img
              src="../../public/images/person/person2.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="heading-4 text-white mb-1">Sarah Kim</h3>
            <p className="body-normal text-among-red mb-3">Lead Developer</p>
            <p className="body-small text-gray-400">
              The coding wizard who brings all the game elements together.
            </p>
          </div>

          <div className="bg-among-space rounded-lg overflow-hidden text-center p-6 shadow-lg">
            <img
              src="../../public/images/person/person3.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="heading-4 text-white mb-1">Marcus Chen</h3>
            <p className="body-normal text-green-500 mb-3">Art Director</p>
            <p className="body-small text-gray-400">
              The artist responsible for Among Us iconic visual style.
            </p>
          </div>

          <div className="bg-among-space rounded-lg overflow-hidden text-center p-6 shadow-lg">
            <img
              src="../../public/images/person/person4.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="heading-4 text-white mb-1">
              Olivia Rodriguez
            </h3>
            <p className="body-normal text-purple-500 mb-3">Community Manager</p>
            <p className="body-small text-gray-400">
              The voice of our players and keeper of the Among Us community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-among-space rounded-lg p-8 shadow-lg">
        <h2 className="heading-2 mb-6 text-white">Contact Us</h2>
        <p className="body-normal text-gray-300 mb-6">
          Have questions, feedback, or just want to say hello? Wed love to hear
          from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="heading-4 text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <span>contact@amongus.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span>
                <span>www.innersloth.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <span>@AmongUsGame</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-4 text-white mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">❓</span>
                <span>FAQ & Help Center</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔧</span>
                <span>Technical Support</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💼</span>
                <span>Business Inquiries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
