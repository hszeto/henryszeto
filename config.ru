use Rack::Static,
  :urls => ["/img", "/js", "/css"],
  :root => "public"

class HenrySzeto
  def call(env)
    req = Rack::Request.new(env)

    case req.path_info
    when "/"
      [200, {"Content-Type" => "text/html", 'Cache-Control' => 'public, max-age=86400'}, File.open('public/index.html', File::RDONLY)]
    when "/privacy-lacafesapp"
      [200, {"Content-Type" => "text/html", 'Cache-Control' => 'public, max-age=86400'}, File.open('public/privacy/privacy-lacafesapp.html', File::RDONLY)]
    when "/privacy-wut2do"
      [200, {"Content-Type" => "text/html", 'Cache-Control' => 'public, max-age=86400'}, File.open('public/privacy/privacy-wut2do.html', File::RDONLY)]
    else
      [404, {"Content-Type" => "text/html", 'Cache-Control' => 'public, max-age=86400'}, File.open('public/404.html', File::RDONLY)]
    end
  end
end

run HenrySzeto.new
