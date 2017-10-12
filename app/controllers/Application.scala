package controllers

import play.api._
import play.api.mvc._
import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import scala.concurrent.ExecutionContext.Implicits.global

class Application @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def index = Action {
    Ok(views.html.index("Angular Web App Title"))
  }
  
  /**
   * Handles all routes not found by Play. These would include angular routes
   */
  def catchAll(anyUrl: String) = Action.async { request =>
    Future(Ok(views.html.index("Angular Web App Title")))
  }
  
}
