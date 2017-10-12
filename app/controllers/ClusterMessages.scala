package controllers

import javax.inject.Inject

import play.api.libs.json.{JsObject, JsValue, Json, Writes}
import play.api.mvc.{Action, InjectedController}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

import models.Message;

class ClusterMessages @Inject()() extends InjectedController {

  def all = Action.async {
    Future(Ok(Json.toJson(Message.getMessages)));
  }
}
