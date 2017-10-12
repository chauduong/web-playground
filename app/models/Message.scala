package models

import play.api.libs.json.Reads._
//import play.api.libs.json.{JsString, JsNumber, Json, JsValue}
import play.api.libs.json.Json

// Just for testing
case class Message(message: String) {

  def testing() {}
}

object Message {
  var messages = List[Message](Message("Message 1"), Message("Message 2"));

  def getMessages():List[Message] = {
    Message.messages
  }

  def addMessage(m:String):List[Message] = {
    Message.messages = Message.messages :+ Message(m)
    Message.messages
  }

  implicit val MessageReads = Json.reads[Message]
  implicit val MessageWrites = Json.writes[Message]    
}

/*
object BlueprintSummary {
  implicit val TemplateSummaryReads = Json.reads[BlueprintSummary]
  implicit val TemplateSummaryWrites = Json.writes[BlueprintSummary]

}
* 
*/
