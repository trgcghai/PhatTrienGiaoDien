import { Heart } from "lucide-react";

function EditorPicks({ title, subtitle, picks }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-1">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-10">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {picks.map((pick) => (
            <div key={pick.id} className="flex gap-4 border rounded-lg p-4">
              <div className="h-32 w-32 relative flex-shrink-0">
                <img
                  src={pick.image || "/placeholder.svg"}
                  alt={pick.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{pick.title}</h3>
                  <button className="text-pink-500">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="text-gray-500 text-sm mb-2">{pick.time}</div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={pick.author.avatar || "/placeholder.svg"}
                      alt={pick.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm">{pick.author.name}</span>
                </div>

                <p className="text-sm text-gray-600">{pick.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorPicks;
