defmodule PhxVuejsWeb.PageController do
  use PhxVuejsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
